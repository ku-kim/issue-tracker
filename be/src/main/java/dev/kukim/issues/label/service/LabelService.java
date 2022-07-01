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
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class LabelService {

	private final LabelRepository labelRepository;
	private final MileStoneRepository mileStoneRepository;

	@Transactional(readOnly = true)
	public LabelListResponse showLabels() {
		List<LabelResponse> labelResponses = labelRepository.findAll()
			.stream()
			.map(LabelResponse::from)
			.collect(Collectors.toList());

		long labelsCount = labelRepository.count();
		long openedMilestonesCount = mileStoneRepository.countByIsOpen(true);

		return new LabelListResponse(labelsCount, openedMilestonesCount, labelResponses);
	}

	@Transactional
	public void insertLabel(LabelInsertRequest request) {
		Label label = new Label(request.getTitle(),
			request.getDescription(),
			request.getBackgroundColor());

		labelRepository.save(label);
	}

	@Transactional
	public void updateLabel(Long labelId, LabelUpdateRequest request) {
		Label findLabel = findLabelById(labelId);

		findLabel.update(request.getTitle(),
			request.getDescription(),
			request.getBackgroundColor());
	}

	@Transactional
	public void removeLabel(Long labelId) {
		Label findLabel = findLabelById(labelId);

		labelRepository.delete(findLabel);
	}

	private Label findLabelById(Long labelId) {
		return labelRepository.findById(labelId)
			.orElseThrow(LabelNotFountException::new);
	}
}
