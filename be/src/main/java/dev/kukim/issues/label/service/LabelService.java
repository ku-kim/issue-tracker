package dev.kukim.issues.label.service;

import dev.kukim.issues.label.controller.request.LabelInsertRequest;
import dev.kukim.issues.label.controller.request.LabelUpdateRequest;
import dev.kukim.issues.label.controller.response.LabelListResponse;
import dev.kukim.issues.label.controller.response.LabelResponse;
import dev.kukim.issues.label.domain.Label;
import dev.kukim.issues.label.domain.repository.LabelRepository;
import dev.kukim.issues.label.exception.LabelNotFountException;
import dev.kukim.issues.milestone.domain.repository.MileStoneRepository;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LabelService {

	private final LabelRepository labelRepository;
	private final MileStoneRepository mileStoneRepository;

	public LabelListResponse showLabels() {
		List<LabelResponse> labelResponses = labelRepository.findAll()
			.stream()
			.map(LabelResponse::createBy)
			.collect(Collectors.toList());

		long labelsCount = labelRepository.count();
		long openedMilestonesCount = mileStoneRepository.countByIsOpen(true);

		return new LabelListResponse(labelsCount, openedMilestonesCount, labelResponses);
	}

	public LabelResponse insertLabel(
		LabelInsertRequest request) {
		Label label = Label.of(request.getTitle(),
			request.getDescription(),
			request.getBackgroundColor());

		Label saveLabel = labelRepository.save(label);

		return LabelResponse.createBy(saveLabel);
	}

	public LabelResponse updateLabel(Long labelId, LabelUpdateRequest request) {
		Label findLabel = labelRepository.findById(labelId)
			.orElseThrow(LabelNotFountException::new);

		findLabel.update(request.getTitle(),
			request.getDescription(),
			request.getBackgroundColor());

		Label updatedLabel = labelRepository.save(findLabel);

		return LabelResponse.createBy(updatedLabel);
	}
}
